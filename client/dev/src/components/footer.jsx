import React, { PureComponent } from 'react';
import {
  Footer,
  FooterLinks,
  FooterLink,
  FooterText
} from 'react-weui'

const oldYear = 2019
const now = (new Date()).getFullYear()
const formatTimeText =  oldYear === now ? now : `${ oldYear } - ${ now }`
const createGithubUrl = user=> `https://github.com/${ user }` 

const ORG = `luxizhizhong`
const AUTHOR = `d1y`

class FooterWrap extends PureComponent {

  render() {
    return (
      <>
        <Footer>
          <FooterLinks>
            <FooterLink href={ createGithubUrl(ORG) }>@{ ORG }</FooterLink>
            <FooterLink href={ createGithubUrl(AUTHOR) }>@{ AUTHOR }</FooterLink>
          </FooterLinks>
          <FooterText>Copyright &copy; { formatTimeText }</FooterText>
        </Footer>
      </>
    );
  }
}

export default FooterWrap;