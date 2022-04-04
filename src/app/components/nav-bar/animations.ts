import {
  animate,
  animation,
  query,
  sequence,
  stagger,
  style
} from "@angular/animations";

export const SidebarOpenAnimationLeft = animation([
  style({ left: "-{{menuWidth}}" }),
  query(".menu-item", [style({ transform: "translateX(-{{menuWidth}})" })]),
  sequence([
    animate("300ms", style({ left: "0" })),
    query(".menu-item", [
      stagger(50, [animate("{{animationStyle}}", style({ transform: "none" }))])
    ])
  ])
]);

export const SidebarOpenAnimationRight = animation([
  style({ right: "-{{menuWidth}}" }),
  query(".menu-item", [style({ transform: "translateX({{menuWidth}})" })]),
  sequence([
    animate("300ms", style({ right: "0" })),
    query(".menu-item", [
      stagger(50, [animate("{{animationStyle}}", style({ transform: "none" }))])
    ])
  ])
]);

export const SidebarCloseAnimationLeft = animation([
  style({ left: "0" }),
  query(".menu-item", [style({ transform: "none" })]),
  sequence([
    query(".menu-item", [
      stagger(-50, [
        animate(
          "{{animationStyle}}",
          style({ transform: "translateX(-{{menuWidth}})" })
        )
      ])
    ]),
    animate("300ms", style({ left: "-{{menuWidth}}" }))
  ])
]);

export const SidebarCloseAnimationRight = animation([
  style({ right: "0" }),
  query(".menu-item", [style({ transform: "none" })]),
  sequence([
    query(".menu-item", [
      stagger(-50, [
        animate(
          "{{animationStyle}}",
          style({ transform: "translateX(-{{menuWidth}})" })
        )
      ])
    ]),
    animate("300ms", style({ right: "-{{menuWidth}}" }))
  ])
]);
