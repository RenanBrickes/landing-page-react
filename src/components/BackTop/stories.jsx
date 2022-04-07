import { BackTop } from '.';

export default {
    title: 'Back to top',
    component: BackTop
}
export const BackToTop = (args) => {
    return (
        <>
            <div style={{ height: '400vh' }}>
                <BackTop {...args} />
            </div>
        </>
    );

}
