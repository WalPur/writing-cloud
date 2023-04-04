from django.db import models


class Publication(models.Model):
    class Genres(models.TextChoices):
        CO = "CO", "Комедия"
        TR = "TR", "Трагедия"
        DR = "DR", "Драма"
        HO = "HO", "Ужасы"

    name = models.TextField(verbose_name="Название публикации")
    author = models.ForeignKey("users.User", on_delete=models.CASCADE)
    text = models.TextField(verbose_name="Содержимое публикации")
    date = models.DateField(verbose_name="Дата публикации", auto_now=True)
    genre = models.CharField(max_length=2, choices=Genres.choices, default=Genres.CO)
    is_adult_only = models.BooleanField(
        verbose_name="Только для взрослых?", default=False
    )

    def __str__(self):
        return "Публикация {self.name}"