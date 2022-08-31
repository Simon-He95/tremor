import React from 'react';

import { BaseColors, HorizontalPositions, Sizes } from 'lib/primitives';
import { Color, HorizontalPosition, MarginTop, Size, getColorTheme } from '../../../lib';
import { buttonProportions, iconSizes } from './styles';
import { classNames, defaultColors, getColorVariantsFromColorThemeValue, spacing } from 'lib';

export interface ButtonInlineProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: HorizontalPosition,
    size?: Size,
    color?: Color,
    handleClick?: { (): void },
    marginTop?: MarginTop,
} 

const ButtonInline = ({
    text,
    Icon,
    iconPosition = HorizontalPositions.Left,
    handleClick,
    size = Sizes.SM,
    color = BaseColors.Blue,
    marginTop = 'mt-0',
}: ButtonInlineProps) => {
    return(
        <span className={ classNames(marginTop) }>
            <button
                type="button"
                onClick={ handleClick }
                className={ classNames(
                    'flex-shrink-0 inline-flex items-center group font-medium',
                    'focus:outline-none focus:ring-none',
                    buttonProportions[size]?.fontSize,
                    getColorVariantsFromColorThemeValue(getColorTheme(color).text).textColor,
                    getColorVariantsFromColorThemeValue(getColorTheme(color).darkText).hoverTextColor,
                    getColorVariantsFromColorThemeValue(defaultColors.transparent).bgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.transparent).hoverBgColor,
                ) }
            >
                { Icon && (iconPosition !== HorizontalPositions.Right) ? ( // ensures that icon is rendered if iconPosition is misspelled
                    <Icon
                        className={ classNames(
                            spacing.twoXs.negativeMarginLeft,
                            spacing.xs.marginRight,
                            iconSizes[size]?.height,
                            iconSizes[size]?.width,
                        ) }
                        aria-hidden="true"
                    />
                ) : null }
                <p className="whitespace-nowrap">{ text }</p>
                { Icon && (iconPosition === HorizontalPositions.Right) ? (
                    <Icon
                        className={ classNames(
                            spacing.twoXs.negativeMarginRight,
                            spacing.xs.marginLeft,
                            iconSizes[size]?.height,
                            iconSizes[size]?.width,
                        ) }
                        aria-hidden="true"
                    />
                ) : null }
            </button>
        </span>
    );
};

export default ButtonInline;
