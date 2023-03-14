import { useParams } from "react-router-dom";

export const withRouter = (Component) => (props) => {
    const params = useParams();
    return <Component params={params} {...props} />;
};
