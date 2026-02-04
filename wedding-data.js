/*!
 * Riviera Waterfront Mansion - Wedding Gallery Data
 * Copyright (c) 2024-2026 UXUI Design Corp. All Rights Reserved.
 * 
 * Unauthorized copying, modification, distribution, or use of this code,
 * via any medium, is strictly prohibited without express written permission.
 * This code is proprietary and confidential.
 * 
 * For licensing inquiries: info@uxuidesigncorp.com
 * Version: 1.0.0
 * Last Modified: 2026-02-04
 */

/**
 * Wedding Data for Riviera Waterfront Mansion
 * Real Weddings Gallery - Curated image selections with placeholder content
 * 
 * Image naming convention:
 * - p = Portrait/couple shots
 * - d = Details (rings, flowers, decor)
 * - r = Reception
 * - c / c2 / C = Ceremony (waterfront)
 * - t = Table settings
 * - 2nd = Secondary photographer shots
 */

const weddingData = {
    // Site-wide settings
    settings: {
        imagePath: 'images/optimized',
        originalPath: 'IMAGES',
        defaultSize: 'medium',
        sizes: {
            thumb: 'thumb',
            medium: 'medium',
            large: 'large'
        }
    },

    // Vendor placeholder data
    vendorCategories: [
        'Photography',
        'Videography',
        'Florist',
        'DJ/Band',
        'Cake',
        'Hair & Makeup',
        'Wedding Planner'
    ],

    // Six real weddings with curated images
    weddings: [
        {
            id: 'by',
            couple: 'Brianna & Youssef',
            date: 'October 2024',
            season: 'Fall',
            guestCount: 175,
            description: 'An enchanting autumn celebration where golden hour light danced across the bay. Brianna and Youssef exchanged vows at our waterfront gazebo as the sun painted the sky in shades of amber and rose. Their reception featured elegant gold accents and lush seasonal florals.',
            shortDescription: 'A golden autumn celebration on the waterfront',
            hero: '_0350334-by-c2.jpg',
            vendors: {
                photography: 'Studio Lumière',
                videography: 'Cinematic Dreams',
                florist: 'Petal & Bloom',
                dj: 'Elite Entertainment',
                cake: 'Sweet Indulgence Bakery',
                hairMakeup: 'Bridal Beauty Co.',
                planner: 'Ever After Events'
            },
            // Curated selection: 10 images
            images: [
                { file: '_0350334-by-c2.jpg', type: 'ceremony', alt: 'Brianna and Youssef exchange vows at Riviera waterfront gazebo overlooking Great South Bay at sunset' },
                { file: '_0350379-by-c2.jpg', type: 'ceremony', alt: 'Outdoor wedding ceremony with guests seated facing the waterfront at Riviera Mansion' },
                { file: '_0350404-by-c2.jpg', type: 'ceremony', alt: 'Bride and groom first kiss at waterfront ceremony with golden sunset backdrop' },
                { file: '_0359652-by-p.jpg', type: 'portrait', alt: 'Brianna and Youssef romantic portrait at Riviera waterfront gazebo at golden hour' },
                { file: '_0359671-by-p.jpg', type: 'portrait', alt: 'Couple shares intimate moment with Great South Bay sunset behind them' },
                { file: '_0359750-by-p.jpg', type: 'portrait', alt: 'Newlyweds walking hand in hand along the waterfront at Riviera Mansion' },
                { file: '_0350231-by-d.jpg', type: 'details', alt: 'Elegant wedding rings displayed on vintage ring box with autumn florals' },
                { file: '_0350458-by-d.jpg', type: 'details', alt: 'Bridal bouquet featuring seasonal fall flowers in burgundy and gold tones' },
                { file: '_0350708-by-r.jpg', type: 'reception', alt: 'Grand ballroom reception at Riviera with crystal chandeliers and elegant table settings' },
                { file: '_1058576-by-r.jpg', type: 'reception', alt: 'Guests celebrating on the dance floor during ballroom reception' }
            ]
        },
        {
            id: 'jj',
            couple: 'Julia & James',
            date: 'June 2024',
            season: 'Summer',
            guestCount: 200,
            description: 'A classic summer soirée filled with timeless elegance and joyful celebration. Julia and James chose soft blush and ivory tones that complemented the natural beauty of the waterfront. Their first dance under the grand ballroom chandeliers was a moment of pure magic.',
            shortDescription: 'Classic elegance meets summer romance',
            hero: '_1058231-jj-p.jpg',
            vendors: {
                photography: 'Captured Moments Studio',
                videography: 'Bay Shore Films',
                florist: 'Garden of Eden Florals',
                dj: 'Sound Wave Entertainment',
                cake: 'The Cake Boutique',
                hairMakeup: 'Glamour Squad',
                planner: 'Simply Perfect Events'
            },
            // Curated selection: 10 images
            images: [
                { file: '_1058231-jj-p.jpg', type: 'portrait', alt: 'Julia and James share a romantic embrace on Riviera waterfront at sunset' },
                { file: '_1058289-jj-p.jpg', type: 'portrait', alt: 'Bride and groom portrait with stunning bay views in the background' },
                { file: '_1058351-jj-p.jpg', type: 'portrait', alt: 'Couple laughing together during golden hour portraits at the mansion' },
                { file: '_1058525-jj-p.jpg', type: 'portrait', alt: 'Newlyweds walking through the manicured gardens of Riviera estate' },
                { file: '_1058693-jj-p.jpg', type: 'portrait', alt: 'Romantic couple portrait on the grand staircase of Riviera Mansion' },
                { file: '_1058101-jj-d.jpg', type: 'details', alt: 'Wedding day details including invitation suite and bridal accessories' },
                { file: '_1058750-jj-d.jpg', type: 'details', alt: 'Elegant table centerpiece with blush roses and ivory candles' },
                { file: '_1058951-jj-r.jpg', type: 'reception', alt: 'First dance under crystal chandeliers in the grand ballroom' },
                { file: '_50M1191-jj-p.jpg', type: 'portrait', alt: 'Julia in her stunning bridal gown in the bridal suite' },
                { file: '_50M1314-jj-p.jpg', type: 'portrait', alt: 'Groom and groomsmen toasting before the ceremony' }
            ]
        },
        {
            id: 'sm',
            couple: 'Sophia & Michael',
            date: 'September 2024',
            season: 'Fall',
            guestCount: 150,
            description: 'An intimate celebration where every detail told their love story. Sophia and Michael chose a romantic palette of dusty rose and sage green, perfectly complementing the early autumn landscape. Their sunset ceremony was followed by a magical evening under twinkling lights.',
            shortDescription: 'Intimate romance with a touch of garden elegance',
            hero: '_24M3284-sm-p.jpg',
            vendors: {
                photography: 'Aisle & Beyond',
                videography: 'Timeless Wedding Films',
                florist: 'Willow & Vine',
                dj: 'Premier Party DJs',
                cake: 'Frosted Fantasies',
                hairMakeup: 'Blush & Glow Beauty',
                planner: 'Dream Day Designs'
            },
            // Curated selection: 10 images
            images: [
                { file: '_24M3284-sm-p.jpg', type: 'portrait', alt: 'Sophia and Michael share a tender moment in Riviera gardens at golden hour' },
                { file: '_24M3331-sm-p.jpg', type: 'portrait', alt: 'Couple portrait with stunning waterfront views of Great South Bay' },
                { file: '_24M3500-sm-p.jpg', type: 'portrait', alt: 'Bride and groom walking through the garden pathway at sunset' },
                { file: '_2004365-sm-p.jpg', type: 'portrait', alt: 'Romantic embrace under the historic gazebo at Riviera Mansion' },
                { file: '_2004393-sm-p.jpg', type: 'portrait', alt: 'Newlyweds silhouetted against the bay during golden hour' },
                { file: '_24M3464-sm-d.jpg', type: 'details', alt: 'Delicate bridal jewelry and accessories arranged on vintage tray' },
                { file: '_2004078-sm-t.jpg', type: 'details', alt: 'Elegant reception table setting with dusty rose linens and gold accents' },
                { file: '_24M3481-sm-r.jpg', type: 'reception', alt: 'Guests enjoying cocktail hour on the waterfront terrace' },
                { file: '_24M3627-sm-r.jpg', type: 'reception', alt: 'Couple cutting their elegant wedding cake in the ballroom' },
                { file: '_24M3871-sm-r.jpg', type: 'reception', alt: 'Dance floor celebration with friends and family' }
            ]
        },
        {
            id: 'tc',
            couple: 'Taylor & Christopher',
            date: 'August 2024',
            season: 'Summer',
            guestCount: 225,
            description: 'A grand celebration that made the most of Long Island summer. Taylor and Christopher brought their vision of modern elegance to life with sleek white orchids, candlelit tablescapes, and stunning views of the bay. The night ended with sparklers along the waterfront.',
            shortDescription: 'Modern sophistication meets waterfront glamour',
            hero: '_24M4616-tc-p.jpg',
            vendors: {
                photography: 'Modern Love Photography',
                videography: 'Highlight Reel Films',
                florist: 'Stems & Petals',
                dj: 'The Music Masters',
                cake: 'Confection Perfection',
                hairMakeup: 'The Glam Studio',
                planner: 'Luxe Event Co.'
            },
            // Curated selection: 10 images
            images: [
                { file: '_24M4616-tc-p.jpg', type: 'portrait', alt: 'Taylor and Christopher elegant portrait on Riviera waterfront at dusk' },
                { file: '_24M4684-tc-p.jpg', type: 'portrait', alt: 'Couple sharing a laugh during sunset portraits by the bay' },
                { file: '_24M4797-tc-p.jpg', type: 'portrait', alt: 'Bride and groom romantic portrait at the waterfront gazebo' },
                { file: '_24M5126-tc-p.jpg', type: 'portrait', alt: 'Newlyweds embracing with waterfront sunset behind them' },
                { file: '_2005599-tc-p.jpg', type: 'portrait', alt: 'Stunning bridal portrait in the elegant bridal suite' },
                { file: '_2006092-tc-p.jpg', type: 'portrait', alt: 'Groom portrait in the gentlemens lounge' },
                { file: '_2006175-tc-p.jpg', type: 'portrait', alt: 'Wedding party celebration on the grand staircase' },
                { file: '_24M5160-tc-r.jpg', type: 'reception', alt: 'Grand ballroom reception with dramatic uplighting and white orchid centerpieces' },
                { file: '_24M5374-tc-r.jpg', type: 'reception', alt: 'Couple first dance surrounded by guests in the ballroom' },
                { file: '_24M5396-tc-r.jpg', type: 'reception', alt: 'Sparkler exit along the waterfront path' }
            ]
        },
        {
            id: 'jd',
            couple: 'Jessica & Daniel',
            date: 'May 2024',
            season: 'Spring',
            guestCount: 180,
            description: 'A springtime celebration bursting with fresh blooms and new beginnings. Jessica and Daniel filled the ballroom with garden roses, peonies, and trailing greenery. Their ceremony at the gazebo featured the most incredible clear-sky views of the bay.',
            shortDescription: 'Spring garden romance in full bloom',
            hero: '_24M5730-jd-p.jpg',
            vendors: {
                photography: 'Forever Moments',
                videography: 'Love Story Cinema',
                florist: 'Rose & Co. Florals',
                dj: 'Party Perfect Entertainment',
                cake: 'Artisan Cakes LI',
                hairMakeup: 'Beauty Bar Bridal',
                planner: 'Elegant Affairs'
            },
            // Curated selection: 10 images
            images: [
                { file: '_24M5730-jd-p.jpg', type: 'portrait', alt: 'Jessica and Daniel romantic portrait surrounded by spring blooms at Riviera' },
                { file: '_24M5917-jd-p.jpg', type: 'portrait', alt: 'Couple walking through the flowering garden at sunset' },
                { file: '_24M5980-jd-p.jpg', type: 'portrait', alt: 'Bride and groom sharing intimate moment at the waterfront gazebo' },
                { file: '_24M6001-jd-p.jpg', type: 'portrait', alt: 'Newlyweds portrait with Great South Bay sparkling in background' },
                { file: '_24M6243-jd-p.jpg', type: 'portrait', alt: 'Romantic embrace under the historic mansion columns' },
                { file: '_2007635-jd-p.jpg', type: 'portrait', alt: 'Bride portrait in stunning lace gown in the bridal suite' },
                { file: '_2007713-jd-d.jpg', type: 'details', alt: 'Lush spring floral arrangements with peonies and garden roses' },
                { file: '_2007721-jd-d.jpg', type: 'details', alt: 'Wedding invitation suite with floral watercolor design' },
                { file: 'DSC02976-jd-2nd.jpg', type: 'reception', alt: 'Guests dancing at the ballroom reception celebration' },
                { file: 'DSC03155-jd-2nd.jpg', type: 'reception', alt: 'Emotional toast speech during dinner reception' }
            ]
        },
        {
            id: 'jb',
            couple: 'Jennifer & Benjamin',
            date: 'January 2025',
            season: 'Winter',
            guestCount: 165,
            description: 'A winter wonderland wedding that proved love knows no season. Jennifer and Benjamin transformed the ballroom into an elegant snow-dusted paradise with silver and white décor, candlelit tables, and touches of evergreen. The intimate ceremony overlooking the peaceful winter bay was truly breathtaking.',
            shortDescription: 'Winter elegance with waterfront magic',
            hero: '_24M0986_Panorama-jb-25-C.jpg',
            vendors: {
                photography: 'Winter Light Studios',
                videography: 'Northern Star Films',
                florist: 'Frost & Fern Florals',
                dj: 'Platinum Sounds',
                cake: 'Snowflake Sweets',
                hairMakeup: 'Winter Glow Beauty',
                planner: 'Seasons Event Planning'
            },
            // Curated selection: 10 images
            images: [
                { file: '_24M0986_Panorama-jb-25-C.jpg', type: 'ceremony', alt: 'Panoramic view of winter wedding ceremony at Riviera waterfront gazebo' },
                { file: '_2001096-jb-25-C.jpg', type: 'ceremony', alt: 'Jennifer and Benjamin exchange vows in elegant winter ceremony setting' },
                { file: '_24M0702-jb-25-P.jpg', type: 'portrait', alt: 'Couple portrait in winter wonderland setting at Riviera Mansion' },
                { file: '_24M0848-jb-25-P.jpg', type: 'portrait', alt: 'Bride and groom embracing with peaceful winter bay behind them' },
                { file: '_24M1359-jb-25-P.jpg', type: 'portrait', alt: 'Romantic winter portrait on the frost-covered grounds' },
                { file: '_24M1277-jb-25-R.jpg', type: 'reception', alt: 'Elegant winter reception in grand ballroom with silver and white decor' },
                { file: '_24M1387-jb-25-R.jpg', type: 'reception', alt: 'First dance surrounded by candlelit tables and winter florals' },
                { file: '_24M1472-jb-25-R.jpg', type: 'reception', alt: 'Guests celebrating at winter wonderland reception' },
                { file: '_COL8956-jb-25-2nd.jpg', type: 'details', alt: 'Winter bridal bouquet with white roses and silver accents' },
                { file: '_COL9141-jb-25-2nd.jpg', type: 'details', alt: 'Elegant winter table setting with candles and evergreen touches' }
            ]
        }
    ],

    // Helper functions
    getWeddingById: function(id) {
        return this.weddings.find(w => w.id === id);
    },

    getAllImages: function() {
        return this.weddings.flatMap(w => w.images.map(img => ({
            ...img,
            weddingId: w.id,
            couple: w.couple,
            date: w.date
        })));
    },

    getImagesByType: function(type) {
        return this.getAllImages().filter(img => img.type === type);
    },

    getHeroImages: function() {
        return this.weddings.map(w => ({
            file: w.hero,
            couple: w.couple,
            date: w.date,
            description: w.shortDescription
        }));
    },

    // Generate srcset for responsive images
    getSrcSet: function(filename, includeWebP = false) {
        const basePath = this.settings.imagePath;
        const name = filename.toLowerCase();
        
        if (includeWebP) {
            const webpName = name.replace('.jpg', '.webp');
            return {
                webp: `${basePath}/webp/thumb/${webpName} 400w, ${basePath}/webp/medium/${webpName} 800w, ${basePath}/webp/large/${webpName} 1600w`,
                jpeg: `${basePath}/thumb/${name} 400w, ${basePath}/medium/${name} 800w, ${basePath}/large/${name} 1600w`
            };
        }
        
        return `${basePath}/thumb/${name} 400w, ${basePath}/medium/${name} 800w, ${basePath}/large/${name} 1600w`;
    },

    // Get image path for specific size
    getImagePath: function(filename, size = 'medium') {
        const basePath = this.settings.imagePath;
        const sizePath = this.settings.sizes[size] || 'medium';
        return `${basePath}/${sizePath}/${filename.toLowerCase()}`;
    }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = weddingData;
}
