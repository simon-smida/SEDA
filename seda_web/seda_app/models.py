from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    TOPIC_CHOICES = [
        ('General Inquiry', 'General Inquiry'),
        ('Product Support', 'Product Support'),
        ('Sales Inquiry', 'Sales Inquiry'),
    ]
    topic = models.CharField(max_length=100, choices=TOPIC_CHOICES)
    product = models.CharField(max_length=100)
    investment_size = models.CharField(max_length=100)
    message = models.TextField()
    agree_terms = models.BooleanField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"