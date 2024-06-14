import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageTextContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: #1b1c22;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 50%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  color: #cbd5e1;
`

export const TextEditorImage = styled.img`
  width: 80%;
`

export const TextContainer = styled.div`
  width: 50%;
  height: 90%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #f8fafc;
  border-radius: 10px;
  margin: 10px 20px 10px 10px;
`

export const ButtonsContainer = styled.ul`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  list-style-type: none;
`

export const ListItemButton = styled.li`
  padding: 1px;
`

export const EditorButtonBold = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: transparent;
  border: none;
  color: ${props => (props.activeBold ? '#faff00' : '#f1f5f9')};
`

export const EditorButtonItalic = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: transparent;
  border: none;
  color: ${props => (props.activeItalic ? '#faff00' : '#f1f5f9')};
`

export const EditorButtonUnderline = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: transparent;
  border: none;
  color: ${props => (props.activeUnderline ? '#faff00' : '#f1f5f9')};
`
export const TextInput = styled.textarea`
  ${props => props.textStyle}
`
