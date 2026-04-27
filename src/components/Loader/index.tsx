import { LoaderWrapper, Spinner } from "./styled";

export const Loader = ({
    size = 16,
    strokeWidth = 3,
    color = 'var(--primary)',
    activeColor = '#333',
    fullPage = false
}) => {
    return (
        <LoaderWrapper $fullPage={fullPage}>
            <Spinner
                $size={size}
                $strokeWidth={strokeWidth}
                $color={color}
                $activeColor={activeColor}
            />
        </LoaderWrapper>
    );
};
