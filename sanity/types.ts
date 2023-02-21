import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Work
 *
 *
 */
export interface Work extends SanityDocument {
  _type: 'work'

  /**
   * Alias — `slug`
   *
   *
   */
  alias?: {_type: 'alias'; current: string}

  /**
   * Megatitle — `string`
   *
   *
   */
  megatitle?: string

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Attrs — `array`
   *
   *
   */
  attrs?: Array<
    SanityKeyed<{
      _type: 'attr'
      /**
       * Key — `string`
       *
       *
       */
      key?: string

      /**
       * Value — `string`
       *
       *
       */
      value?: string
    }>
  >

  /**
   * Date — `string`
   *
   *
   */
  date?: string

  /**
   * Desc — `string`
   *
   *
   */
  desc?: string

  /**
   * Gallery — `array`
   *
   *
   */
  gallery?: Array<
    SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  >

  /**
   * Hidden Gallery — `array`
   *
   *
   */
  hiddenGallery?: Array<
    SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  >

  /**
   * Text — `markdown`
   *
   *
   */
  text?: Markdown
}

/**
 * General
 *
 *
 */
export interface General extends SanityDocument {
  _type: 'general'

  /**
   * Contacts — `object`
   *
   *
   */
  contacts?: {
    _type: 'contacts'
    /**
     * Title — `string`
     *
     *
     */
    title?: string

    /**
     * Desc — `string`
     *
     *
     */
    desc?: string

    /**
     * Phone — `string`
     *
     *
     */
    phone?: string

    /**
     * Email — `string`
     *
     *
     */
    email?: string

    /**
     * Whatsapp — `string`
     *
     *
     */
    whatsapp?: string

    /**
     * Vk — `string`
     *
     *
     */
    vk?: string

    /**
     * Telegram — `string`
     *
     *
     */
    telegram?: string
  }

  /**
   * Footer — `object`
   *
   *
   */
  footer?: {
    _type: 'footer'
    /**
     * Copyright — `string`
     *
     *
     */
    copyright?: string
  }

  /**
   * Work — `object`
   *
   *
   */
  work?: {
    _type: 'work'
    /**
     * Back — `string`
     *
     *
     */
    back?: string

    /**
     * Title — `string`
     *
     *
     */
    title?: string
  }
}

/**
 * Steps
 *
 *
 */
export interface Steps extends SanityDocument {
  _type: 'steps'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Desc — `string`
   *
   *
   */
  desc?: string

  /**
   * Gallery — `array`
   *
   *
   */
  gallery?: Array<
    SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  >

  /**
   * Hidden Gallery — `array`
   *
   *
   */
  hiddenGallery?: Array<
    SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  >

  /**
   * Text — `markdown`
   *
   *
   */
  text?: Markdown
}

/**
 * Main
 *
 *
 */
export interface Main extends SanityDocument {
  _type: 'main'

  /**
   * Gallery — `array`
   *
   *
   */
  gallery?: Array<
    SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  >

  /**
   * Promo — `object`
   *
   *
   */
  promo?: {
    _type: 'promo'
    /**
     * Image — `image`
     *
     *
     */
    image?: {
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }

    /**
     * Title — `string`
     *
     *
     */
    title?: string

    /**
     * Desc — `string`
     *
     *
     */
    desc?: string
  }

  /**
   * Services — `object`
   *
   *
   */
  services?: {
    _type: 'services'
    /**
     * Title — `string`
     *
     *
     */
    title?: string

    /**
     * Desc — `string`
     *
     *
     */
    desc?: string

    /**
     * Items — `array`
     *
     *
     */
    items?: Array<
      SanityKeyed<{
        _type: 'service'
        /**
         * Title — `string`
         *
         *
         */
        title?: string

        /**
         * Desc — `string`
         *
         *
         */
        desc?: string

        /**
         * Text — `text`
         *
         *
         */
        text?: string
      }>
    >
  }

  /**
   * Works — `object`
   *
   *
   */
  works?: {
    _type: 'works'
    /**
     * Title — `string`
     *
     *
     */
    title?: string

    /**
     * Desc — `string`
     *
     *
     */
    desc?: string

    /**
     * Items — `array`
     *
     *
     */
    items?: Array<SanityKeyedReference<Work>>
  }

  /**
   * FAQ — `object`
   *
   *
   */
  faq?: {
    _type: 'faq'
    /**
     * Title — `string`
     *
     *
     */
    title?: string

    /**
     * Desc — `string`
     *
     *
     */
    desc?: string

    /**
     * Items — `array`
     *
     *
     */
    items?: Array<
      SanityKeyed<{
        _type: 'question'
        /**
         * Title — `string`
         *
         *
         */
        title?: string

        /**
         * Text — `text`
         *
         *
         */
        text?: string
      }>
    >
  }
}

export type Documents = Work | General | Steps | Main

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Markdown = any
