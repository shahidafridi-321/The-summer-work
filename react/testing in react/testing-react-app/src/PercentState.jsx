import React from "react";
import PropTypes from "prop-types";

export const PercentageStat = ({
	label,
	score = 0,
	total = Math.max(1, score),
}) => {
	return (
		<div>
			<h6>{label}</h6>
			<span>{Math.floor((score / total) * 100)}%</span>
		</div>
	);
};

PercentageStat.propTypes = {
	label: PropTypes.string,
	score: PropTypes.number,
  total:PropTypes.number.
};
