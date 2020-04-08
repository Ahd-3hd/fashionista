from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=100)
    product_type = models.CharField(max_length=100)
    img = models.ImageField()
    # owner = models.ForeignKey(
    #     User, related_name='products', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
