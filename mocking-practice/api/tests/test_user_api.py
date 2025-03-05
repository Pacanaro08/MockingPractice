import pytest, sys, os
from unittest.mock import patch, MagicMock

sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from apis.user_api import get_user_data
from api.api import app

@pytest.fixture
def client():
    with app.test_client() as client:
        with app.app_context():
            yield client

@patch('apis.user_api.random.choice')
def test_user_data(mock_choice, client):
    mock_choice.side_effect = ["Pietro", 23, "Black"]

    response = client.get('/api/user_info')
    result = response.get_json()
    assert result == {"name": "Pietro", "age": 23, "color": "Black"}

@patch('apis.user_api.get_user_data')
def test_user_data_validation(mock_get_user_data, client):
    mock_get_user_data.return_value = {"name": "Pietro", "age": 23, "color": "Black"}

    response = client.get('/api/user_info')
    result = response.get_json()

    assert 'name' in result
    assert 'age' in result
    assert 'color' in result
    assert isinstance(result['name'], str)
    assert isinstance(result['age'], int)
    assert isinstance(result['color'], str)
