import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {
    authors: "Kanagi, Karamo, Prof. Ku, Cheng-Yuan, Li-Kai Lin and Wen-Huai Hsieh",
    title: 'Efficient Clinical Data Sharing Framework Based on Blockchain Technology,Open Source Projects',
    journal:"Methods of information in medicine",
    year: 2021,
  },
  {
    authors: "Kanagi, Karamo, Prof. Ku, Cheng-Yuan",
    title: 'Using Blockchain to Support Interoperability and Data Management Access in Taiwan Healthcare System,',
    journal:"12th International Conference on Healthcare Information Management (UHIMA 2017), National Chiao Tung University, Hsinchu, Taiwan,",
    year: 2017,
  },
  {
    authors: "Kanagi, Karamo, Prof. Chaur-Chin Chen",
    title: 'Steganography by Color Images Using Advanced Encryption Standard (AES),',
    journal:"Journal of international Cooperation,",
    year: 2015,
  },
 
];

const Acomplishments = () => (
  <Section>
<SectionTitle>Publications</SectionTitle>
<div>
  {data.map((card, index) =>(
    <div key={index}>
      <BoxNum>{card.title}</BoxNum>
      <BoxText>{card.authors}</BoxText>
      <BoxText>{card.journal} {card.year}.</BoxText><br />
      
    </div>

  ))}
</div>

  </Section>
);

export default Acomplishments;
