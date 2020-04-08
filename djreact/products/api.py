from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer


# Product Viewset
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer

    # def get_queryset(self):
    #     return self.request.user.products.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
