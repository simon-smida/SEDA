from django.shortcuts import render
from django.utils.text import slugify

# Create your views here.
def main_page(request):
    brands_categories = [
        "Drinking water",
        "Water Management",
        "Feeding & Oil",
        "Distilation, Brewing & Juice",
        "Solar",        
    ]
    # Categories for div classes
    slugified_categories = [slugify(category) for category in brands_categories]
    brand_categories = zip(brands_categories, slugified_categories)
    context = {
        "brands_categories" : brands_categories,
        "slugified_categories" : slugified_categories,
        "brand_categories" : brand_categories
    }
    return render(request, 'base.html', context)