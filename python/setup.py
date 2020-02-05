# -*- coding: utf-8 -*-
from setuptools import find_packages, setup

REQUIREMENTS = [
    'grpcio',
    'google-api-core'
]

setup(
    name='chirpstack-api',
    version = "3.0.2-23-g96e4024"
    author='Orne Brocaar',
    author_email='info@brocaar.com',
    license='MIT',
    description='Chirpstack Python API',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=REQUIREMENTS
)
