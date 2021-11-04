import React from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyStatusModal = props => {
  const dispatch = useDispatch();
  const { applyStatusModal, setApplyStatusModal, postId } = props;
  const modalClose = () => {
    setApplyStatusModal(false);
  };

  // const applyUser = useSelector(state => state.applyUser.users);

  // React.useEffect(() => {
  //   const postId = props.postId;
  //   dispatch(applyCreators.applyUserMiddleware(postId));
  // }, []);

  const acceptOffer = () => {
    dispatch(applyCreators.acceptOfferMiddleware());
  };

  return (
    <>
      <Dialog maxWidth={"sm"} scroll="paper" open={applyStatusModal}>
        <ModalWrap>
          <Grid height="10%" bg="#eee" position="relative">
            <Grid
              position="absolute"
              top="0px"
              right="10px"
              width="20px"
              padding="10px"
            >
              <CloseIcon fontSize="large" onClick={modalClose} />
            </Grid>
            <Grid alignItems="center">
              <Text margin="0 0 0 20px" bold>
                신청현황
              </Text>
            </Grid>
          </Grid>
          <Grid display="flex" height="85%" justifyContent="center">
            <Grid width="80%" margin="10px">
              {/* {applyUser.map((img, idx) => (
            <Grid>
              <img src={img} alt={img} />
            </Grid>
          ))} */}
              <Grid
                border="1px solid #ddd"
                margin="auto"
                height="100px"
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                padding="10px"
                width="90%"
              >
                <Grid margin="auto">
                  <Image size="80"></Image>
                </Grid>
                <Grid margin="auto" height="50px">
                  닉네임(유저성향)
                </Grid>
                <Grid margin="auto" height="50px">
                  <Button _onClick={acceptOffer}>수락</Button>
                </Grid>
                <Grid margin="auto" height="50px">
                  <Button backgroundColor="#fff" color="#111">
                    취소
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ModalWrap>
      </Dialog>
    </>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 500px;
`;

export default ApplyStatusModal;
