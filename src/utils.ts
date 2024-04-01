import React from 'react'
import { twMerge } from 'tailwind-merge'

export const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

// Returns true if an element is a react fragment
export const isReactFragment = (node: React.ReactNode | typeof React.Fragment) => {
  if (!node) return false

  if ((node as React.ReactElement)?.type) {
    return (node as React.ReactElement)?.type === React.Fragment
  }

  return node === React.Fragment
}

// If an invalid element or fragment is passed in as the node, wrap it with the wrapper and add props
// If a valid element is passed, add the props
export const wrapWithElementIfInvalid = ({
  node,
  wrapper,
  props = {},
}: {
  node: React.ReactNode
  wrapper: React.ReactElement
  props?: any
}) => {
  if (!node) {
    return React.cloneElement(wrapper, props)
  } else if (!React.isValidElement(node)) {
    return React.cloneElement(wrapper, props, node)
  } else if (isReactFragment(node)) {
    return React.cloneElement(
      wrapper,
      { ...props, className: twMerge(node.props?.className, props?.className) },
      node.props.children
    )
  } else {
    return React.cloneElement(node, {
      ...props,
      className: twMerge(node.props?.className, props?.className),
    })
  }
}

// Returns true if there is a single, string child element
export const isSingleStringChild = (children?: React.ReactNode) => {
  return (
    children &&
    React.Children.count(children) === 1 &&
    React.isValidElement(children) &&
    typeof children.props.children === 'string'
  )
}

export const isNumber = (value: any): boolean => {
  const regex = /^[0-9\b]+$/;
  if (value === "" || regex.test(value)) {
    return true;
  }

  return false;
}

export const checkImageDimensions = (setImageDimensions: Function, imageUrl: string) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width
    });
  };
}