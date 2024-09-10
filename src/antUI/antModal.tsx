import { useState } from "react";
import {Modal } from "antd";

const AntModal = (props: any) => {
  const [open, setOpen] = useState(false);




  const handleCancel = () => {
    console.log("Clicked cancel button");
    props.sarado();
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button> */}
      {/* <div>
            {props.newTitle}
        </div> */}

      <Modal
        open={props.bukasOpen}
        // onOk={handleOk}
        onClose={handleCancel}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
            {props.componentPass ? props.componentPass : null}
        </div>
      </Modal>
    </>
  );
};

export default AntModal;
