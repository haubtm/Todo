import { Drawer, Input } from "antd";

const ViewUserDetail = (props) => {
    const { isModalDetailOpen, setIsModalDetailOpen, dataDetail, setDataDetail } = props;

    return (
        <Drawer
            title="Detail User"
            open={isModalDetailOpen}
            onClose={() => {
                setDataDetail(null);
                setIsModalDetailOpen(false);
            }}
        >
            {dataDetail ?
                <>
                    <p>Id: {dataDetail.id}</p>
                    <br />
                    <p>Full Name: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone: {dataDetail.phone}</p>
                    <br />
                </>
                :
                <>
                    <p>No data</p>
                </>}
        </Drawer>
    )
}

export default ViewUserDetail;