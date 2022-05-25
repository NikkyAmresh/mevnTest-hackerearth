import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import PostDetails from "@/components/PostDetails.vue";

describe("PostDetails.vue", () => {
  it("renders props.post when passed for non-published posts", async () => {
    const post = { title: "xyz", description: "Abc", published: false };
    const wrapper = shallowMount(PostDetails, {
      propsData: {
        post,
      },
    });
    expect(wrapper.text()).toMatchSnapshot();
  });

  it("renders props.post when passed for published posts", async () => {
    const post = { title: "abc", description: "xyz", published: true };
    const wrapper = shallowMount(PostDetails, {
      props: {
        post,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
