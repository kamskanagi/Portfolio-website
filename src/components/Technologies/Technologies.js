import React from 'react';
import { DiFirebase, DiReact, DiZend, DiDatabase} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a lot of technologies in the hardware and software industry.
      From AI, Machine Learning and Deep Learning, Blockchain Technology, Cloud Computing, Backend to Frontend Design,
      
    </SectionText>
    {/* <List>

      <ListItem>
        <DiReact size="3em">
          <ListContainer>
            <ListTitle> Frontend</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </DiReact>
      </ListItem>

      <ListItem>
        <DiZend size="3em">
          <ListContainer>
            <ListTitle> BAckend</ListTitle>
            <ListParagraph>
              Experience with <br />
              Nodejs and PHP
            </ListParagraph>
          </ListContainer>
        </DiZend>
      </ListItem>

      <ListItem>
        <DiFirebase size="3em">
          <ListContainer>
            <ListTitle> UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </DiFirebase>
      </ListItem>

      <ListItem>
        <DiDatabase size="3em">
          <ListContainer>
            <ListTitle>Data Science</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </DiDatabase>
      </ListItem>
    </List> */}

</Section>
);

export default Technologies;
