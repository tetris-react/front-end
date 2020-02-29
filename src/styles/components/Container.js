import styled from 'styled-components';
import scale from '../helpers/scale';
export const Container = styled.div`
  ${props =>
    props.flex &&
    `
    display: flex;
    flex-direction: ${props.flex.direction || 'row'};
    justify-content: ${props.flex.justify || 'center'};
    align-items: ${props.flex.align || 'flex-start'};
    flex-grow: ${props.flex.grow || 0};
    flex-basis: ${props.flex.basis || 'auto'};
    flex-shrink: ${props.flex.shrink || 1};
    flex-wrap: ${props.flex.wrap || 'no-wrap'};
    flex: ${props.flex.flex || '0 1 auto'};
    margin: ${props.flex.margin || 0};
    padding: ${props.flex.padding || 0};
    max-width: ${props.flex.maxWidth || 'none'};
    width: ${props.flex.width || 'auto'};
    max-height: ${props.flex.maxHeight || 'none'};
    height: ${props.flex.height || 'auto'};
  `};

  ${props =>
    props.base &&
    `
    margin: ${props.base.margin || 0};
    margin-top: ${props.base.marginTop || 0};
    margin-right: ${props.base.marginRight || 0};
    margin-left: ${props.base.marginLeft || 0};
    margin-bottom: ${props.base.marginBottom || 0};
    padding: ${props.base.padding || 0};
    max-width: ${props.base.maxWidth || 'none'};
    width: ${props.base.width || 'auto'};
    max-height: ${props.base.maxHeight || 'none'};
    height: ${props.base.height || 'auto'};
    border: ${props.base.border || 'none'};
    background-color: ${props.base.bgColor || 'none'};
    position: ${props.base.position || 'static'};
    top: ${props.base.top || '0'};
    left: ${props.base.left || '0'};
    transform: ${props.base.transform || 'none'};
  `};
`;
