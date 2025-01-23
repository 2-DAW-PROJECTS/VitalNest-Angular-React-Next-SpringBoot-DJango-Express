"""
Django settings for core project.

Generated by 'django-admin startproject' using Django 4.2.18.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-hu*@qlqlu5%_(rmru1e*&t6to4jks%+rxnpn4*grqq(c0an%o+'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party apps ##################
    'rest_framework',

    # Activities ##################
    'vitalnest.activities.apps.ActivitiesConfig',

    # Timetables ##################
    'vitalnest.timetables.day.apps.DayConfig',
    'vitalnest.timetables.daysofweek.apps.DayOfWeekConfig',
    'vitalnest.timetables.hour.apps.HourConfig',
    'vitalnest.timetables.month.apps.MonthConfig',
    'vitalnest.timetables.year.apps.YearConfig',

    # Users ##################
    'vitalnest.usertype.user.apps.UserConfig',
    'vitalnest.usertype.userpatient.apps.UserPatientConfig',

    # Token ##################
    'vitalnest.token.blacklist.apps.BlackListConfig',
    'vitalnest.token.refreshtoken.apps.RefreshTokenConfig',

    # Roles ##################
    'vitalnest.roles.role.apps.RoleConfig',
    'vitalnest.roles.userrole.apps.UserRoleConfig',

    # Health ##################
    'vitalnest.health.medications.apps.MedicationsConfig',
    'vitalnest.health.prescription.apps.PrescriptionConfig',

    # Notifications ##################
    'vitalnest.notifications.prescriptions.apps.NotificationsPrescriptionsConfig',
    'vitalnest.notifications.activities.apps.NotificationsActivityConfig',
    'vitalnest.notifications.diets.apps.NotificationsDietsConfig',

    # Rooms ##################
    'vitalnest.rooms.room.apps.RoomConfig',
    'vitalnest.rooms.bedroom.apps.BedRoomConfig',

    # Food ##################
    'vitalnest.food.meals.apps.MealsConfig',
    'vitalnest.food.diets.apps.DietsConfig',

    # Images ##################
    'vitalnest.images.images.apps.ImagesConfig',
    'vitalnest.images.imagesactivities.apps.ImagesActivitiesConfig',
    'vitalnest.images.imagesrooms.apps.ImagesRoomsConfig',

    # Payments ##################
    'vitalnest.payments.payment.apps.PaymentConfig',
    'vitalnest.payments.inscription.apps.InscriptionConfig',
    'vitalnest.payments.cancelation.apps.CancelationConfig',

]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'vitalnest',
        'USER': 'postgres',
        'PASSWORD': 'rootpassword',
        'HOST': 'postgres',  # This matches the service name in docker-compose.yml
        'PORT': '5432',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
