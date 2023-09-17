from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer

@api_view(["GET","POST"])
def getAllPosts(request):
    match(request.method):
        case "GET":            
            posts = Post.objects.all()
            serializer = PostSerializer(posts, many=True)
            return Response(serializer.data)
        case "POST":
            serializer = PostSerializer(data=request.data)
            if(serializer.is_valid()):
                serializer.save()
                return Response(serializer.data,status=status.HTTP_200_OK)
            return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(["GET","PUT","DELETE"])
def getSinglePost(request, id):
    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    match(request.method):
        case "GET":
            serializer = PostSerializer(post)
            return Response(serializer.data)
        case "PUT":
            serializer = PostSerializer(post, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        case "DELETE":
            post.delete()
            return Response(status=status.HTTP_200_OK)