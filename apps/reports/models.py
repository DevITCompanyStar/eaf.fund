from django.db import models

ReportCategory = (
    ("News", "News"),
    ("Events", "Events"),
    ("Announcement", "Announcement"),
)


class Report(models.Model):
    title = models.CharField(max_length=100)
    preview_image = models.ImageField(upload_to="reports/")
    category = models.CharField(max_length=100, choices=ReportCategory)
    short_description = models.TextField()
    description1 = models.TextField()
    description2 = models.TextField(null=True, blank=True, help_text="Unrequired")
    description_image = models.ImageField(upload_to="reports/", null=True, blank=True, help_text="Unrequired")
    event_date = models.DateField()

    class Meta:
        ordering = ["-event_date"]
        verbose_name = "Report"
        verbose_name_plural = "Reports"

    def __str__(self):
        return self.title


class ReportImage(models.Model):
    report = models.ForeignKey(
        Report,
        on_delete=models.CASCADE,
        related_name="images"
    )
    image = models.ImageField(upload_to="reports/")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]
        verbose_name = "Image"
        verbose_name_plural = "Images"


class ReportVideo(models.Model):
    report = models.ForeignKey(
        Report,
        on_delete=models.CASCADE,
        related_name="videos"
    )
    video = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]
        verbose_name = "Video"
        verbose_name_plural = "Videos"
