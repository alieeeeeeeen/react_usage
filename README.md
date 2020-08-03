# Lazy

```
  <Suspense fallback={<div>Loading....</div>}>
    <Component>
  </Suspense>
```


# HOC with hook

```
  export const wrappedComponent = (wrappedComponent, axios) => {
    return props => {
      useState....
      useEffect...

      return(...)
    }
  }
```