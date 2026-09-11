import { Blocks, FileText, Moon, Palette, Sun } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/use-theme"

const STATS = [
  { icon: FileText, label: "고정 스펙", value: "10", unit: "개", desc: "tokens 7 · patterns 1 · components 1 · validation 1" },
  { icon: Blocks, label: "어댑터", value: "4", unit: "개", desc: "krds · material · ant-design · shadcn" },
  { icon: Palette, label: "이 프로젝트가 채운 값", value: "10", unit: "개", desc: "doc/design-system/변동/*.md" },
]

const BADGE_VARIANTS = [
  { variant: "default" as const, label: "Default" },
  { variant: "secondary" as const, label: "Secondary" },
  { variant: "destructive" as const, label: "Destructive" },
  { variant: "success" as const, label: "Success" },
  { variant: "warning" as const, label: "Warning" },
  { variant: "info" as const, label: "Info" },
  { variant: "outline" as const, label: "Outline" },
  { variant: "ghost" as const, label: "Ghost" },
]

const BUTTON_VARIANTS = [
  { variant: "default" as const, label: "Default" },
  { variant: "secondary" as const, label: "Secondary" },
  { variant: "outline" as const, label: "Outline" },
  { variant: "ghost" as const, label: "Ghost" },
  { variant: "destructive" as const, label: "Destructive" },
]

const COLUMN_COUNT = { mobile: 6, tablet: 12, desktop: 16 }

function App() {
  const [dark, setDark] = useTheme()

  return (
    <main className="mx-auto min-h-svh max-w-[1120px] px-6 py-10">
      {/* ===== 헤더 — depth-0: H1 → 본문 ===== */}
      <header
        className="flex flex-wrap items-start justify-between gap-6"
        style={{ marginBottom: "var(--space-depth-0)" }}
      >
        <div>
          <Badge variant="secondary" className="mb-2">
            ss-design-system 예제 프로젝트
          </Badge>
          <h1 className="text-heading-1 font-bold tracking-tight text-balance">
            프레임워크 스펙 전체를 적용한 Vite + shadcn 데모
          </h1>
          <p className="mt-2 max-w-[62ch] text-body-1 text-muted-foreground">
            <code className="text-foreground">framework/specs/</code> 전체(토큰 7종 + 패턴·컴포넌트·검증 스펙)와{" "}
            <code className="text-foreground">prompts/framework/color-tokens.md</code> 계약을 실제 코드에 적용했다.
            무엇이 고정 계약이고 무엇이 이 프로젝트의 변동 값인지는{" "}
            <code className="text-foreground">doc/design-system/</code>에 10쌍으로 나눠 정리했다.
          </p>
        </div>

        <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-body-2">
          {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
          다크 모드
          <Switch checked={dark} onCheckedChange={setDark} />
        </label>
      </header>

      {/* ===== 통계 카드 — depth-1: H2 형제 ===== */}
      <section
        className="grid gap-4 sm:grid-cols-3"
        style={{ marginBottom: "var(--space-depth-1)" }}
      >
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <div className="flex items-center gap-2 text-muted-foreground">
                <stat.icon className="size-4" />
                <CardDescription>{stat.label}</CardDescription>
              </div>
              <CardTitle className="text-heading-2">
                {stat.value}
                <span className="ml-1 text-body-2 font-normal text-muted-foreground">{stat.unit}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-caption text-muted-foreground">{stat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ===== 고정 대 변동 — depth-1 ===== */}
      <section style={{ marginBottom: "var(--space-depth-1)" }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-heading-2">고정 대 변동</CardTitle>
            <CardDescription>
              같은 계약, 다른 값 — 이 카드의 강조 버튼만 10% <code>--primary</code>를 쓴다.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-2">
            <Button>doc/design-system 열어보기</Button>
            <Button variant="outline">framework/specs 열어보기</Button>
            <span className="text-caption text-muted-foreground">
              hover는 팔레트 단계 60, pressed는 70 — color-mix로 그 값에 맞춘 것.
            </span>
          </CardContent>
        </Card>
      </section>

      {/* ===== 컴포넌트 갤러리 — depth-1 (component-contract.md) ===== */}
      <section style={{ marginBottom: "var(--space-depth-1)" }}>
        <h2 className="text-heading-2 mb-1">컴포넌트 갤러리</h2>
        <p className="mb-4 text-body-2 text-muted-foreground">
          Variant × State → Token 계약(component-contract.md §4)을 실제 컴포넌트로 나열한 것.
        </p>

        <Card>
          <CardContent className="flex flex-col gap-(--space-depth-3)">
            <div>
              <h3 className="text-body-1 font-semibold" style={{ marginBottom: "var(--space-depth-3)" }}>
                Button — Default / Disabled
              </h3>
              <div className="flex flex-wrap gap-2">
                {BUTTON_VARIANTS.map((b) => (
                  <Button key={b.variant} variant={b.variant}>
                    {b.label}
                  </Button>
                ))}
                <Button disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <h3 className="text-body-1 font-semibold" style={{ marginBottom: "var(--space-depth-3)" }}>
                Badge — {BADGE_VARIANTS.length} variant
              </h3>
              <div className="flex flex-wrap gap-2">
                {BADGE_VARIANTS.map((b) => (
                  <Badge key={b.variant} variant={b.variant}>
                    {b.label}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== 레이아웃 컬럼 — depth-1 (layout.md 반응형 컬럼 수: Desktop 16 · Tablet 12 · Mobile 6) ===== */}
      <section style={{ marginBottom: "var(--space-depth-1)" }}>
        <h2 className="text-heading-2 mb-1">레이아웃 컬럼</h2>
        <p className="mb-4 text-body-2 text-muted-foreground">
          Desktop {COLUMN_COUNT.desktop} · Tablet {COLUMN_COUNT.tablet} · Mobile {COLUMN_COUNT.mobile}
          — 창 너비를 바꾸면 실제로 컬럼 수가 달라진다.
        </p>
        <div className="grid grid-cols-6 gap-1 md:grid-cols-12 xl:grid-cols-[repeat(16,minmax(0,1fr))]">
          {Array.from({ length: 16 }, (_, i) => (
            <div
              key={i}
              className="flex h-8 items-center justify-center rounded-md bg-muted text-caption text-muted-foreground"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 미디어 패턴 — depth-1 (patterns/media.md) ===== */}
      <section style={{ marginBottom: "var(--space-depth-1)" }}>
        <h2 className="text-heading-2 mb-1">미디어 패턴</h2>
        <p className="mb-4 text-body-2 text-muted-foreground">
          가로 100% 이미지, 3줄 말줄임, 모달 너비(최대 85%) 규칙을 실제로 적용한 것.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-heading-2">3줄 말줄임</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-body-2 text-muted-foreground">
                framework/specs/patterns/media.md는 배너·카드형 텍스트를 3줄까지만 노출하고 나머지는 말줄임표로
                처리하라고 규정한다. 이 문단은 실제로 그 규칙을 적용한 예시로, 화면 폭이 좁아도 카드 높이가
                내용 길이에 따라 늘어나지 않도록 Tailwind의 line-clamp-3 유틸리티로 3번째 줄 끝에서 잘리고
                말줄임표가 붙는다 — 이 뒤에 이어지는 문장은 실제로는 화면에 보이지 않아야 정상이다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-heading-2">가로 100% 이미지</CardTitle>
            </CardHeader>
            <CardContent>
              <svg
                viewBox="0 0 400 160"
                role="img"
                aria-label="6개 팔레트를 나타내는 색 스와치 일러스트"
                className="w-full rounded-lg"
              >
                <rect width="400" height="160" fill="var(--surface-recessed)" rx="8" />
                {["primary", "destructive", "success", "warning", "info"].map((name, i) => (
                  <rect
                    key={name}
                    x={20 + i * 74}
                    y="60"
                    width="58"
                    height="40"
                    rx="6"
                    fill={`var(--${name})`}
                  />
                ))}
              </svg>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== 다이얼로그 — depth-1 (elevation.md §5 딤드 + --elevation-3) ===== */}
      <section style={{ marginBottom: "var(--space-depth-1)" }}>
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>
            고정 규칙 요약 보기 (Dialog)
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>이 프로젝트가 지키는 고정 규칙</DialogTitle>
              <DialogDescription>
                framework/specs/의 규칙 그대로 — 값은 doc/design-system/변동/에서 확인.
              </DialogDescription>
            </DialogHeader>
            <ul className="flex flex-col gap-2 text-body-2 text-muted-foreground">
              <li>색: primitive → semantic 2단계, 60/30/10 면적 비율.</li>
              <li>Radius: 프로젝트 전체 단일 값.</li>
              <li>간격: 8px 단위(예외 4px), Depth별로 좁아진다.</li>
              <li>타이포: 폰트 1개, Heading/Body/Caption 3단계.</li>
            </ul>
            <DialogFooter showCloseButton />
          </DialogContent>
        </Dialog>
      </section>

      <footer className="border-t border-border pt-4 text-caption text-muted-foreground">
        고정 계약: <code>doc/design-system/고정/</code> · 이 프로젝트의 실제 값:{" "}
        <code>doc/design-system/변동/</code>
      </footer>
    </main>
  )
}

export default App
