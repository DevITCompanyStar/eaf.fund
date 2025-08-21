from django.db import models
from unidecode import unidecode
from django.utils.text import slugify


class Category(models.Model):
    title = models.CharField(unique=True, max_length=255)
    slug = models.SlugField(
        unique=True,
        blank=True,
        max_length=255,
        help_text="Auto generated from title"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def save(self, *args, **kwargs):
        if not self.slug:
            translated_title = unidecode(self.title)
            self.slug = slugify(translated_title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Program(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.TextField(null=True, blank=True)
    support_text = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="programs"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Program"
        verbose_name_plural = "Programs"

    def __str__(self):
        return self.title


class Purpose(models.Model):
    program = models.ForeignKey(
        Program,
        on_delete=models.CASCADE,
        related_name="purposes"
    )
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]


class HowWeWork(models.Model):
    program = models.ForeignKey(
        Program,
        on_delete=models.CASCADE,
        related_name="how_we_work"
    )
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]


class ProgramImage(models.Model):
    report = models.ForeignKey(
        Program,
        on_delete=models.CASCADE,
        related_name="images"
    )
    image = models.ImageField(upload_to="programs/")
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]
        verbose_name = "Image"
        verbose_name_plural = "Images"
