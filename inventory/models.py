from django.db import models


class Product(models.Model):

    title = models.CharField(max_length=200, help_text="Enter Product Title")
    description = models.TextField(help_text="Enter Product Description")
    unitCost = models.FloatField(help_text="Enter Product Unit Cost")
    unit = models.CharField(max_length=10, help_text="Enter Product Unit ")
    created_at = models.DateField(auto_now_add=True, null=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):

        return self.title 