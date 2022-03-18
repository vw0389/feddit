from django.db import models

# Create your models here.

class Users(models.Model):
    username = models.CharField(max_length=32)
    email = models.CharField(max_length=32)
    password = models.CharField(max_length=64)
    last_login = models.TimeField(default=None)
    created_at = models.TimeField()

class Posts(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    title = models.CharField(max_length=64)
    content = models.TextField(Default=None)

    created_at = models.TimeField()

class Comments(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    content = models.TextField()

    created_at = models.TimeField()

class Votes(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    up = models.BooleanField()

    created_at = models.TimeField()