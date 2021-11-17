/* eslint-disable */
import React from "react";
import SortText from "./SortText";
import { Grid, Button } from "../../elements/Index";
import styled from "styled-components";
import { postActions } from "../../redux/modules/post";
import { sortAction } from "../../redux/modules/sort";
import { bookRecommendAction } from "../../redux/modules/bookRecommend";
import { pageAction } from "../../redux/modules/infinity";
import { useSelector, useDispatch } from "react-redux";

const Sort = (props) => {
  const dispatch = useDispatch();
  const [arr, setArr] = React.useState([
    {
      id: "최신",
      status: "createdAt",
      active: false,
    },
    {
      id: "마감순",
      status: "deadline",
      active: false,
    },
    {
      id: "북마크",
      status: "bookmark",
      active: false,
    },
    {
      id: "추천",
      status: "recommend",
      active: false,
    },
  ]);

  const onclickSort = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(sortAction.getSort(data));
    dispatch(bookRecommendAction.getRb(""));
    props.setPaging(12);
  };
  //bookmark,recommend
  const onclickRb = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(bookRecommendAction.getRb(data));
    dispatch(sortAction.getSort(""));
    // if (paging > 0) {
    //   setPaging(paging - 1);
    // }
    props.setPaging(12);
  };

  const Filter = (getItem) => {
    setArr((state) => {
      return state.map((stateItem) => {
        if (stateItem.id === getItem.id) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
  };

  return (
    <>
      {arr && (
        <FilterBox>
          {arr.map((item) => {
            return (
              <SortText
                item={item}
                key={item.id}
                page={props.page}
                onClick={() => {
                  Filter(item);
                  if (item.id === "최신" || item.id === "마감순") {
                    onclickSort(item.status);
                  } else {
                    onclickRb(item.status);
                  }
                }}
              ></SortText>
            );
          })}
        </FilterBox>
      )}
    </>
  );
};

const FilterBox = styled.div`
  display: flex;
  font-size: 20px;
  margin: 10px auto;
  justify-content: flex-end;
  width: 75%;
  max-width: 1920px;
  @media screen and (max-width: 1850px) {
    justify-content: center;
  }
  @media screen and (max-width: 750px) {
    justify-content: center;
    font-size: 12px;
  }
`;
export default Sort;
