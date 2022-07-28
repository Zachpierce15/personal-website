import React from 'react';
import styled from 'styled-components';

function Introduction() {
    return (
      <div>
        <AboutMeContainer>
            <AboutMeBuddle>
                <PageTitle>Finding A New Passion</PageTitle>
                <DescriptionSectionItem>
                  My software developer adventure at the beginning of my career.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  It starts when I gave up my passion of lacrosse for the first time since it began in middle school.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  <span>Something you have to know about me is that lacrosse was my single greatest passion for a time.</span>
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  It consumed every decision that I made from the time I was in middle school choosing which high school I would attend
                  to pushing me to get into college and play at the highest level.
                  I strove to be the best player that I could be and enjoyed the hours and hours of practice I did outside of my teams practice.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  I had given college lacrosse every last bit of what I could and it didn't turn out as I wanted.
                  In the end there was decisions made that frustrated me and left me confused on whether or not to give up lacrosse.
                  It had been my guiding light in a way for a long time so it was scary and really hard to leave it behind.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  It was in this time of frustration and confusion that I realized I needed another passion.
                  Another place to put all my energy and time.
                  What I found was something something that I wasn't expecting.
                </DescriptionSectionItem>
                <SectionTitle>It was Software developing</SectionTitle>
                <DescriptionSectionItem>
                  I have a cousin who is in the field of software development that had been pushing me to try out coding.
                  For the longest time I pushed off meeting with him saying "Lacrosse is just getting good".
                  As you can assume lacrosse at this point was not going well at all so I gave "coding a shot".
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  Soon enough I started gaining as much of a passion for software develop as I did for lacrosse and my future was clear.
                  I wanted to become the best software developer I could.
                </DescriptionSectionItem>
                <SectionTitle>Hack Reactor</SectionTitle>
                <DescriptionSectionItem>
                  After deciding to pursue software development I made the decision to attend
                  Hack Reactor which is one of the most promient bootcamps in the U.S.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  It's an extremely difficult program that spanned over the course of 3 months during which
                  you are expected to learn quickly and effeciently.
                  One day you're learning about Javascript and the concept of classes
                  and the next you're expected to build a fully functional app using React, Nodejs, and a database of your choice.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  All I can say is that it was one of the hardest most rewarding experience I've ever had.
                  One of the reasons for that is because there is a test at
                  the halfway point that determines whether or not you can stay for the rest of the program.
                  I studied my heart out day in and day out to make sure that I passed that test and finished my education
                </DescriptionSectionItem>
                <SectionTitle>The start of my future</SectionTitle>
                <DescriptionSectionItem>
                  After I graduated from Hack Reactor I got a job working for SlingTV as a React Developer and haven't looked back since.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  My favorite thing about software development is that it's a profession that
                  I need to be on my toes when it comes to learning new things.
                  It's been so amazing continuing to perfect my craft by learning new concepts such as Redux and RSJX.
                  I can't wait to learn more as time goes on.
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  That's a quick intro into the beginning of my career
                  and I hope you enjoyed reading about my experiences up to this point in software development
                </DescriptionSectionItem>
                <DescriptionSectionItem>
                  For those of you who would like to get into contact with me my email is <span>zachary.15pierce@gmail.com</span>
                </DescriptionSectionItem>
            </AboutMeBuddle>
        </AboutMeContainer>
    </div>
    )
}

export default Introduction;

const AboutMeContainer = styled.div`
      display: flex;
`;

const AboutMeBuddle = styled.div`
       background-color: #1f2833;
      border: 3px solid black;
      border-radius: 8px;
      color: white;
      font-size: x-large;
      justify-content: center;
      margin: 33px;
      :-webkit-scrollbar {
    display: none;
  }
`;

const PageTitle = styled.h1`
      text-align: center;
`;

const DescriptionSectionItem = styled.p`
      margin: 15px;
    color: #c8c8c8;
    text-align: center;

    span {
      font-weight: 400;
    }
`;

const SectionTitle = styled.h3`
    text-align: center;
`;