from django.db import models


class Commantary(models.Model):
    publication = models.ForeignKey(
        "publication.Publication",
        on_delete=models.CASCADE,
        verbose_name="Публикация",
    )
    author = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, verbose_name="Автор комментария"
    )
    text = models.TextField(verbose_name="Комментарий")
    time_created = models.DateTimeField(auto_now=True)
    is_review = models.BooleanField(default=False)

    def __str__(self):
        return "Комментарий на пост {self.publication.name}"
