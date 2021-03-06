# -*- coding: UTF-8 -*-
import logging
from django.template import Template, Context, TemplateSyntaxError
from django.test import TestCase
from django.test.utils import override_settings

logger = logging.getLogger(__name__)


class Test<%= classifiedName %>Temlatetag(TestCase):
    def setUp(self):
        self.context = {}

    def _render(self, template):
        return Template(template).render(Context(self.context)).strip()

    def test_tag(self):
        template = """
            {% load <%= underscoredName %> %}
            {% <%= underscoredName %> %}
        """
        self.assertEqual(self._render(template), '')
