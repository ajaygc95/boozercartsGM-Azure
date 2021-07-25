# Generated by Django 3.2 on 2021-05-26 04:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hero', '0003_item_order_orderitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('Alcohol', 'Alcohol'), ('Food', 'Food'), ('Snacks', 'Snacks')], default='Alcohol', max_length=50),
            preserve_default=False,
        ),
    ]