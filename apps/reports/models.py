from django.db import models


class Report(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
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
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]
        verbose_name = "Image"
        verbose_name_plural = "Images"
