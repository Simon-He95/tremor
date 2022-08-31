import React from 'react';

import { BaseColors, HorizontalPositions, Importances, Sizes, classNames, isBaseColor, spacing } from 'lib';
import { Color, HorizontalPosition, Importance, MarginTop, Size } from '../../../lib';
import {
    buttonProportions,
    colors,
    iconSizes,
} from './styles';

export interface ButtonProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: HorizontalPosition,
    size?: Size,
    color?: Color,
    importance?: Importance,
    handleClick?: { (): void },
    marginTop?: MarginTop,
}

const Button = ({
    text,
    Icon,
    iconPosition = HorizontalPositions.Left,
    handleClick,
    size = Sizes.SM,
    color = BaseColors.Blue,
    importance = Importances.Primary,
    marginTop = 'mt-0',
}: ButtonProps) => {
    const buttonColors = isBaseColor(color) ? colors[color] : colors[BaseColors.Blue];
    return(
        <span className={ classNames(marginTop) }>
            <button
                type="button"
                onClick={ handleClick }
                className={ classNames(
                    'flex-shrink-0 inline-flex items-center group font-medium',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent',
                    'rounded-md border shadow-sm',
                    buttonProportions[size]?.paddingLeft,
                    buttonProportions[size]?.paddingRight,
                    buttonProportions[size]?.paddingTop,
                    buttonProportions[size]?.paddingBottom,
                    buttonProportions[size]?.fontSize,
                    buttonColors[importance].bgColor,
                    buttonColors[importance].borderColor,
                    buttonColors[importance].focusRingColor,
                    buttonColors[importance].hoverBgColor,
                    buttonColors[importance].hoverBorderColor,
                    buttonColors[importance].textColor,
                ) }
            >
                { Icon && (iconPosition !== HorizontalPositions.Right) ? ( // ensures that icon is rendered if iconPosition is misspelled
                    <Icon
                        className={classNames(
                            spacing.twoXs.negativeMarginLeft,
                            spacing.xs.marginRight,
                            iconSizes[size]?.height,
                            iconSizes[size]?.width,
                        )}
                        aria-hidden="true"
                    />
                ) : null }
                <p className="whitespace-nowrap">
                    { text }
                </p>
                { Icon && (iconPosition === HorizontalPositions.Right) ? (
                    <Icon
                        className={classNames(
                            spacing.twoXs.negativeMarginRight,
                            spacing.xs.marginLeft,
                            iconSizes[size]?.height,
                            iconSizes[size]?.width,
                        )}
                        aria-hidden="true"
                    />
                ) : null }
            </button>
        </span>
    );
};

export default Button;
