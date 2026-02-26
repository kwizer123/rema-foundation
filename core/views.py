from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request,'core/Index.html')


def about_us(request):
    return render(request,'core/AboutUs.html')


def contact_us(request):
    return render(request,'core/ContactUs.html')
