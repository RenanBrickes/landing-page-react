import { SectionContainer } from '.';

export default {
    title: 'Containers',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Phasellus placerat mollis lacus eget tincidunt.
                    Mauris semper vulputate nibh vulputate placerat.
                    Quisque bibendum dapibus augue. Sed eget lorem nisl.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Curabitur tincidunt at est in placerat.
                    Vivamus pretium, magna consequat mattis lacinia, orci est congue tellus</p>
            </div>
        ),
    },
}
export const Container = (args) => <SectionContainer {...args} />
