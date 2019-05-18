from .models import RecycledMaterial


def get_all_recycling_data():
    return RecycledMaterial.query.all()

def add_recycling_data(data):
    return RecycledMaterial.add_data(data)