// StackWrite.js
/* eslint-disable */

// import를 한다
import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";
import Select from "react-select";

// StackWrite 함수형 컴포넌트를 만든다
const StackWrite = (props) => {
  const stackSelect = [
    { value: "React", label: "React" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Node", label: "Node" },
    { value: "Flask", label: "Flask" },
    { value: "C++", label: "C++" },
    { value: "Django", label: "Django" },
    { value: "php", label: "php" },
    { value: "Vue", label: "Vue" },
    { value: "Spring", label: "Spring" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "TypeScript", label: "TypeScript" },
  ];

  const handleChange = useCallback(
    (inputValue, { action, removedValue }) => {
      if (props.techstack.length < 4) {
        props.setTectstack(inputValue);
      } else {
        if (removedValue !== undefined) {
          let temp = props.techstack.filter(
            (item) => item["value"] !== removedValue["value"]
          );
          props.setTectstack(temp);
        } else {
          window.alert("최대 4가지만 선택 가능합니다.");
        }
      }
    },
    [stackSelect]
  );

  const formatTech = () => {
    let tamarray = [];
    let index;
    for (index = 0; index < props.techstack.length; index++) {
      tamarray.push(props.techstack[index]["label"]);
    }
    props.setTechStackList(tamarray);
  };

  useEffect(() => {
    formatTech();
  }, [props.techstack]);

  return (
    <React.Fragment>
      <Grid margin="10px auto">
        <StackMedia>
          <Text color="#4e442d">
            기술스택 선택
            <SubDescription> *(최대 4개)</SubDescription>
          </Text>
          <Select
            isMulti
            value={props.techstack}
            components={props.animatedComponents}
            styles={props.styles}
            options={stackSelect}
            onChange={handleChange}
            placeholder={<div>기술 스택을 선택해주세요.</div>}
          />
        </StackMedia>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const SubDescription = styled.span`
  color: red;
  font-size: 12px;
`;

const StackMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 350px;
    margin: auto;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default StackWrite;
