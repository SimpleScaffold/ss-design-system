import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        /*
         * destructive/success/warning/info — soft 배지 패턴(component-contract.md §4, colors.md §7·§9):
         * surface(단계 05) 배경 + border(단계 10) + text(단계 60/다크 20). opacity(/10, /20) 근사치가 아니라
         * 팔레트 실제 단계 값이다 — doc/design-system/변동/colors.md "상태색 소비 패턴" 참고.
         */
        destructive:
          "border-destructive-border bg-destructive-surface text-destructive-text focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive-border",
        success:
          "border-success-border bg-success-surface text-success-text focus-visible:ring-success/20 [a]:hover:bg-success-border",
        warning:
          "border-warning-border bg-warning-surface text-warning-text focus-visible:ring-warning/20 [a]:hover:bg-warning-border",
        info: "border-info-border bg-info-surface text-info-text focus-visible:ring-info/20 [a]:hover:bg-info-border",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
