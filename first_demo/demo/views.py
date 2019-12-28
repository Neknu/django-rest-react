from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Book
from .serializers import BookSerializer, BookMiniSerializer


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookMiniSerializer
    queryset = Book.objects.all()
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = BookSerializer(instance)
        return Response(serializer.data)


# def first(request):
#     books = Book.objects.all()
#
#     return render(request, 'first_temp.html', {'books': books})


# class Another(View):
#
#     books = Book.objects.get(id=2)
#     output = ''
#
#     # for book in books:
#     #     output += f"We have {book.title} books with id {book.id} in DB<br>"
#     output = f"We have {books.title} books with id {books.id} in DB<br>"
#
#     def get(self, request):
#         return HttpResponse(self.output)

