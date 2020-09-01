import React from "react";
import PropTypes from "prop-types";

import Icon from "components/icon/Icon";
import Button from "./Button";

ButtonIcon.propTypes = {
  buttonProps: PropTypes.object,
  iconProps: PropTypes.object,
  variant: PropTypes.string,
  iconName: PropTypes.string.isRequired,
};

function ButtonIcon(props) {
  const { className, buttonProps, iconProps, variant, iconName } = props;

  return (
    <Button
      className={className}
      buttonProps={{ ...buttonProps }}
      variant={variant}
    >
      <Icon iconProps={{ ...iconProps }} name={iconName} />
    </Button>
  );
}

export default ButtonIcon;
