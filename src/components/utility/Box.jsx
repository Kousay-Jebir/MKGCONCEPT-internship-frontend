export default function Box({ children, styles={}, element = 'div' }) {
    const Element = element;

    return (
        <Element style={styles}>
            {children}
        </Element>
    );
}
