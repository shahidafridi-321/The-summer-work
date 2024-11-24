import PropTypes from "prop-types";

export const RenderName = (props) => {
	return <div>{props.name}</div>;
};

RenderName.propTypes = {
	name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
	name: "shahid",
};
