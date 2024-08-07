import styled from 'styled-components';

export const EditProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      color: #666;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: var(--color-pri);
        box-shadow: 0 0 0 2px var(--color-pri);
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 2px;

    button {
      padding: 10px 8px;
      margin: 0px 5px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:first-child {
        background-color: var(--color-pri);
        color: white;

        &:hover {
          background-color: var(--color-pri);
        }
      }

      &.secondary-button {
        background-color: #f1f1f1;
        color: #333;

        &:hover {
          background-color: #e0e0e0;
        }
      }
    }
  }
`;
