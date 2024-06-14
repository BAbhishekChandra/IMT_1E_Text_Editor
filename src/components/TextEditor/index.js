import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorContainer,
  ImageTextContainer,
  ImageContainer,
  TextContainer,
  TextHeading,
  TextEditorImage,
  ButtonsContainer,
  ListItemButton,
  EditorButtonBold,
  EditorButtonItalic,
  EditorButtonUnderline,
  TextInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {text: '', onBold: false, onItalic: false, onUnderline: false}

  onChangeTextInput = event => {
    this.setState({text: event.target.value})
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({onBold: !prevState.onBold}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({onItalic: !prevState.onItalic}))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({onUnderline: !prevState.onUnderline}))
  }

  render() {
    const {text, onBold, onItalic, onUnderline} = this.state
    const textStyle = {
      fontWeight: onBold ? 'bold' : 'normal',
      fontStyle: onItalic ? 'italic' : 'normal',
      textDecoration: onUnderline ? 'underline' : 'normal',
      color: '#cbd5e1',
      width: '100%',
      height: '80%',
      padding: '10px 5px 10px 10px',
      backgroundColor: '#25262c',
      fontFamily: 'Roboto',
      fontSize: '16px',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      border: '1px solid #334155',
    }

    return (
      <>
        <TextEditorContainer>
          <ImageTextContainer>
            <ImageContainer>
              <TextHeading>Text Editor</TextHeading>
              <TextEditorImage
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </ImageContainer>
            <TextContainer>
              <ButtonsContainer>
                <ListItemButton>
                  <EditorButtonBold
                    data-testid="bold"
                    onClick={this.onClickBoldButton}
                    activeBold={onBold}
                  >
                    <VscBold size={25} />
                  </EditorButtonBold>
                </ListItemButton>
                <ListItemButton>
                  <EditorButtonItalic
                    data-testid="italic"
                    onClick={this.onClickItalicButton}
                    activeItalic={onItalic}
                  >
                    <GoItalic size={25} />
                  </EditorButtonItalic>
                </ListItemButton>
                <ListItemButton>
                  <EditorButtonUnderline
                    data-testid="underline"
                    onClick={this.onClickUnderlineButton}
                    activeUnderline={onUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </EditorButtonUnderline>
                </ListItemButton>
              </ButtonsContainer>
              <TextInput
                type="text"
                value={text}
                onChange={this.onChangeTextInput}
                style={textStyle}
              />
            </TextContainer>
          </ImageTextContainer>
        </TextEditorContainer>
      </>
    )
  }
}

export default TextEditor
