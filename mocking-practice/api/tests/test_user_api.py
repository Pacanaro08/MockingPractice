import pytest, sys
from unittest.mock import patch
sys.path.append('..')

from api import user_data

@patch('api.random.choice')
def test_user_data(mock_choice):
    mock_choice.side_effect = ["Pietro", 23, "Black"]

    result = user_data()
    assert result == {"name":"Pietro", "age":23, "color":"Black"}