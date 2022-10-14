<script>
    import Date from "./components/Date.svelte";
    import Name from "./first_assignment/Name.svelte";
    import AddNumber from "./first_assignment/AddNumber.svelte";
    import Count from "./first_assignment/Count.svelte";
    import HandleClick from "./first_assignment/HandleClick.svelte";
    import Nested from "./first_assignment/Nested.svelte";
    import NestedOne from "./first_assignment/NestedOne.svelte";
    import ScrOne from "./first_assignment/ScrOne.svelte";

  const name = "Silke";
</script>

<h2 id="page-title">Hello</h2>
<div>more content for {name}.</div>



<Date></Date>
<Name></Name>
<AddNumber></AddNumber>
<Count></Count>
<HandleClick></HandleClick>
<NestedOne></NestedOne>
<Nested></Nested>
<ScrOne></ScrOne>


<style>
  #page-title {
    color: pink;
  }
</style>